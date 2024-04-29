import { toast } from "../../components/ui/use-toast";
import PieChart from "../../components/chart/PieChart";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

const HomePage = ({ data, twubricScore, onRemove }) => {

  // Remove user functionality
  const handleRemove = (index) => {
    const removedUser = data[index].fullname;
    onRemove(index);
    toast({
      title: `Removed ${removedUser}`,
      variant: "destructive",
    });
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 w-full my-8">
      {data && data.length === 0 ? (
        <div className="my-20 text-center w-full text-slate-600">No Data, Please search again</div>
      ) : (
        <>
          {data &&
            data.map((userData, index) => (
              <div
                key={userData.uid}
                className="border p-4 md:p-8 rounded-xl shadow-sm transition-all duration-200 hover:shadow-xl bg-white group"
              >
                <div className="flex justify-between">
                  <div>
                    <img
                      src={userData.image}
                      alt={`Profile of ${userData.fullname}`}
                      className="rounded-full mb-2 border-2 group-hover:shadow-lg group-hover:border-slate-500 transition-all duration-200"
                      width={64}
                      height={64}
                    />

                    <span className="text-sm font-medium text-neutral-800">
                      {userData.fullname}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <label className="text-sm text-neutral-500">Total</label>
                    <span className="text-lg font-semibold">
                      {userData.twubric.total}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <label className="text-sm text-neutral-500">
                      Twubric score
                    </label>
                    <span className="text-lg font-semibold">
                      {twubricScore(userData)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <ul>
                    <li className="text-[#2fa964] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#2fa964]"></div>
                      Friends:{" "}
                      <span className="text-black">
                        {userData.twubric.friends}
                      </span>
                    </li>
                    <li className="text-[#37a3d8] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#37a3d8]"></div>
                      Influence:{" "}
                      <span className="text-black">
                        {userData.twubric.influence}
                      </span>
                    </li>
                    <li className="text-[#8860d0] flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#8860d0]"></div>
                      Chirpiness:{" "}
                      <span className="text-black">
                        {userData.twubric.chirpiness}
                      </span>
                    </li>
                  </ul>
                  <PieChart userData={userData} />
                </div>
                <p className="text-sm text-neutral-500">
                  Joined on:{" "}
                  <span className="font-medium">{new Date(userData.join_date * 1000).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}</span>
                </p>
                <AlertDialog>
                  <AlertDialogTrigger className="text-black bg-white w-full py-2 rounded-lg border font-semibold hover:bg-black hover:text-white transition-all duration-300 ease-in mt-6">
                    Remove
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone until you click reset or refresh the page. By clicking continue you
                        will be unfollowing the user.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleRemove(index)}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default HomePage;
