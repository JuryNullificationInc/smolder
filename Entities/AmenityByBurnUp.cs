using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace smolder.Entities
{
    public class AmenityByBurnUp
    {
        [ForeignKey("BurnUp")]
        [Required]
        public long BurnUpId { get; set; }

        public virtual BurnUp BurnUp { get; set; }

        [ForeignKey("BurnUpAmenity")]
        [Required]
        public long BurnUpAmenityId { get; set; }

        public virtual BurnAmenity BurnAmenity { get; set; }
    }
}
