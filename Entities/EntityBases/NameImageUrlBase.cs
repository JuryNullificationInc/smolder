using System.ComponentModel.DataAnnotations;

namespace smolder.Entities.EntityBases
{
    public class NameImageUrlBase
    {
        [Key]
        public long Id { get; set; }

        public string Name { get; set; }

        public string ImagePath { get; set; }

        public string RegionalsUrl { get; set; }

        public string Description { get; set; }
    }
}
