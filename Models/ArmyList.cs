namespace Warplan.Models
{
    public class ArmyList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public ApplicationUser? User { get; set; }
        public string Data { get; set; }

        public ArmyList(string name, string userId, string data)
        {
            Name = name;
            UserId = userId;
            Data = data;
        }
    }
}