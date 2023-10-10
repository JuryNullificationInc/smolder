using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace smolder.Entities
{
    public class BurnUp
    {
        [ForeignKey("BurnOrg")]
        [Required]
        public long BurnOrgId { get; set; }

        public BurnOrg BurnOrg { get; set; }

        [ForeignKey("BurnEvent")]
        [Required]
        public long BurnEventId { get; set; }

        public BurnEvent BurnEvent { get; set; }
    }
}
