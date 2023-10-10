using System.ComponentModel.DataAnnotations.Schema;

namespace smolder.Entities
{
    public class TixType
    {
        [ForeignKey("BurnUp")]
        public long BurnUpId { get; set; }

        public virtual BurnUp BurnUp { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
