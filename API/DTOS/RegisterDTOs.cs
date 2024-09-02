using System.ComponentModel.DataAnnotations;

namespace API.DTOS
{
    public class RegisterDTOs
    {
        [Required]
        public required string Username { set; get; } = String.Empty;
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public required string Password { get; set; } = string.Empty;

    }
}