namespace Warplan.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using Warplan.Data;
    using Warplan.Models;
    using Warplan.ViewModels;

    [Authorize]
    [ApiController]
    [Route("api/army-list")]
    public class ArmyListController : ControllerBase
    {

        private readonly ILogger<ArmyListController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> userManager;

        public ArmyListController(ILogger<ArmyListController> logger, ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _logger = logger;
            _context = context;
            this.userManager = userManager;
        }

        [HttpGet("")]
        public async Task<ActionResult<ArmyListViewModel[]>> GetAll()
        {
            var user = await GetClaimedUser();
            if (user == null) return Forbid();

            var armyLists = await _context.ArmyLists.Where(x => x.User == user).ToArrayAsync();
            return Ok(armyLists.Select(x => new ArmyListViewModel(x)).ToArray());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, ArmyListEditViewModel model)
        {
            var user = await GetClaimedUser();
            if (user == null) return Forbid();

            var armyList = await _context.ArmyLists.FirstOrDefaultAsync(x => x.Id == id && x.User == user);
            if (armyList == null)
            {
                return NotFound();
            }

            armyList.Name = model.Name;
            armyList.Data = model.Data;
            armyList.ModificationDate = DateTime.UtcNow;
            _context.Update(armyList);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("")]
        public async Task<ActionResult<ArmyListViewModel>> Create(ArmyListEditViewModel model)
        {
            var user = await GetClaimedUser();
            if (user == null) return Forbid();

            var armyList = new ArmyList(model.Name, user.Id, model.Data, DateTime.UtcNow);
            _context.ArmyLists.Add(armyList);
            await _context.SaveChangesAsync();
            return Ok(new ArmyListViewModel(armyList));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var user = await GetClaimedUser();
            if (user == null) return Forbid();

            var armyList = await _context.ArmyLists.FindAsync(id);
            if (armyList != null)
            {
                if (armyList.UserId != user.Id)
                {
                    return Forbid();
                }

                _context.ArmyLists.Remove(armyList);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        private async Task<ApplicationUser?> GetClaimedUser()
        {
            var userId = User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier);
            if (userId == null) return null;

            return await userManager.FindByIdAsync(userId.Value);
        }
    }
}
