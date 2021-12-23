using Warplan.Models;

namespace Warplan.ViewModels
{
    public class ArmyListViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Data { get; set; }

        public ArmyListViewModel(ArmyList armyList)
        {
            Id = armyList.Id;
            Name = armyList.Name;
            Data = armyList.Data;
        }
    }
}