namespace Warplan.Models
{
    using System;

    public class ArmyList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public ApplicationUser? User { get; set; }
        public string Data { get; set; }
        public DateTime ModificationDate { get; set; }

        public ArmyList(string name, string userId, string data, DateTime modificationDate)
        {
            Name = name;
            UserId = userId;
            Data = data;
            ModificationDate = modificationDate;
        }
    }
}