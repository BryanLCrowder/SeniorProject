using System.ComponentModel.DataAnnotations;

namespace SeniorProject.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 8, ErrorMessage = "Password must be longer then 8 Characters")]
        public string Password { get; set; }
    }
}