import Initiates from "@/Components/Initiates";

export const metadata = {
  title: 'Users',
  description: '...',
}

const usersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const { name, username, email } = users;

  return (
    <div>
      <h1 className="text-4xl text-purple-500">All Users are here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 justify-center items-center w-full">
        {users.map((user) => {
          let { name, username, email, phone, website, address, company } = user;
          let {street, suite, city, zipcode} = address
          return (
            <>
              <div
                key={user.id}
                class="card w-80 h-auto bg-[#07182E] rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]"
              >
                <div class="card-content p-4 relative z-10">
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-xl shadow-lg mr-3 border-2 border-white/20 bg-blue-500 flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight">
                      <div class="text-center font-bold text-xl">
                        <Initiates name={user.name}></Initiates>
                      </div>
                    </div>
                    <div>
                      <h2
                        title="SuperApp"
                        class="text-lg font-bold text-white/90 truncate"
                      >
                        {username}
                      </h2>
                      <div class="badge badge-accent">{username}</div>
                      <br />
                    </div>
                  </div>

                  <div class="mb-4">
                    <span class="text-xl font-semibold text-white/80 mb-2">
                      Email
                    </span>
                    <div class="badge badge-accent"> { email}</div>
                    <br />
                    <span class="text-xl font-semibold text-white/80 mb-2">
                      Phone
                    </span>
                    <div class="badge badge-accent">{ phone}</div>
                    <br />
                    <span class="text-xl   font-semibold text-white/80 mb-2">
                      Website
                    </span>
                    <div class="badge badge-accent">{ website}</div>
                    <br />
                    <span class="text-xl   font-semibold text-white/80 mb-2">
                      Address
                    </span>
                    <div class="">{suite}, {street}, {city}, {zipcode} </div>
                    <span class="text-xl   font-semibold text-white/80 mb-2">
                      Company
                    </span>
                    <div class="">{company.name} </div>
                  </div>

                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default usersPage;
