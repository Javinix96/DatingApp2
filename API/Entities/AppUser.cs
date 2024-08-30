using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser{
    public int Id { get; set; }

    public string UserName { get; set; }

    public byte[] PasswordHash {set; get;}

    public byte[] PasswordSalt { get; set; }
}