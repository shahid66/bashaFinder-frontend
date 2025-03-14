import { getUsers } from "@/services/admin";

const AdminDashboard = async () => {
  const { data } = await getUsers();
  const filterData = data?.result.filter((item:any) => item?.role !== "admin");

  console.log(filterData);

  console.log(data);
  console.log(filterData);

  // Count the number of users with role 'landlord'
  const landlordCount =
    filterData?.filter((item:any) => item.role === "landlord").length || 0;
  const tenantCount =
    filterData?.filter((item:any) => item.role === "tenant").length || 0;

  console.log("Landlord Count:", landlordCount);

  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          <h2 className="text-4xl">
            Total Landlord : <strong>{landlordCount}</strong>
          </h2>
        </div>
        <div className="aspect-video rounded-xl bg-muted flex justify-center items-center">
          <h2 className="text-4xl">
            Total Tenant : <strong>{tenantCount}</strong>
          </h2>
        </div>
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4" />
    </div>
  );
};

export default AdminDashboard;
