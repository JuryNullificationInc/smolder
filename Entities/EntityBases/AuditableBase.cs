using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace smolder.Entities.EntityBases
{
    public class AuditableBase
    {
        [Key]
        public long Id { get; set; }

        public DateTime TimeCreated { get; set; }

        [ForeignKey("MadeBy")]
        public long MadeById { get; set; }

        public virtual Burner MadeBy { get; set; }

        public DateTime TimeLastUpdated { get; set; }

        [ForeignKey("LastUpdatedBy")]
        public long LastUpdatedById { get; set; }

        public virtual Burner LastUpdatedBy { get; set; }
    }
}
