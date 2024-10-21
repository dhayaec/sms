import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import FinanceChart from '@/components/FinanceChart';
import UserCard from '@/components/UserCard';

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* ADMIN LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4 flex-col md:flex-row mt-4">
          <div className="w-full lg:w-1/3 h-[300px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[300px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px] mt-4">
          <FinanceChart />
        </div>
      </div>
      {/* ADMIN RIGHT */}
      <div className="w-full md:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
