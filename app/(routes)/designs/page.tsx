"use client";
import { useAuthContext } from "@/app/provider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DesignCard from "./_components/DesignCard";
import { Loader2 } from "lucide-react";

function Designs() {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [wireframeList, setWireframeList] = useState([]);
  
  useEffect(() => {
    user && GetAllUserWireframe();
  }, [user]);

  const GetAllUserWireframe = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      const result = await axios.get(
        "/api/wireframe-to-code?email=" + user?.email
      );
      console.log(result.data);
      setWireframeList(result.data);
    } catch (error) {
      console.error("Error fetching wireframes:", error);
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl">Wireframes & Codes</h2>
      {loading ? (
        <div>
          <h2 className="mt-3 font-bold text-2xl text-center p-20 flex items-center justify-center bg-slate-100 h-[76vh] rounded-xl gap-2">
            <Loader2 className="animate-spin" />
            Fetching Wireframes...
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {wireframeList?.map((item, index) => (
            <DesignCard key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Designs;