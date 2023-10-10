using System.ComponentModel.DataAnnotations.Schema;

namespace smolder.Entities
{
    public class TixInfo
    {
        [ForeignKey("TixType")]
        public long TixTypeId { get; set; }

        public virtual TixType TixType { get; set; }

        public float Price { get; set; }

        public long TotalQuantity { get; set; }

        public long QuantityPurchased { get; set; }

        public long QuantityAvailable { get; set; }

        public DateTime SaleStarts { get; set; }

        public DateTime SaleEnds { get; set; }
    }
}
