using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Error
{
    public class ApiExceptions(int statusCode, string message, string? details)
    {
        public int StatusCode { get; set; } = statusCode;

        public string Mesage { set; get; } = message;

        public string? Details { set; get; } = details;

    }
}