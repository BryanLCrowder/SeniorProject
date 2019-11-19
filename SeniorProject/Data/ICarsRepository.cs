using System.Collections.Generic;
using System.Threading.Tasks;
using SeniorProject.Models;

namespace SeniorProject.Data
{
    public interface ICarsRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers(); 
         Task<User> GetUser(int id);
    }
}