using System.ComponentModel.DataAnnotations;

namespace API.DTOS
{
    public class RegisterDTOs
    {
        [Required]
        public string Username { set; get; }
        [Required]
        public string Password { get; set; }
        
    }
}