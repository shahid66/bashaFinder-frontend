"use client";

import { BFTable } from "@/components/ui/core/BFTable";
import { RentalRequest } from "@/types/request";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionCell from "./ActionCell";

const ManageListingRequests = ({ products }: { products: RentalRequest[] }) => {
  const columns: ColumnDef<RentalRequest>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex juc items-center space-x-3">
          <Image
            src={row.original.rentalHouse.images[0]}
            alt=""
            width={100}
            height={100}
            className="w-30 h-20 "
          />
          <span className="truncate">{row.original.rentalHouse.location}</span>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span className="flex justify-center items-center">
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ row }) => <span>{row.original.paymentStatus}</span>,
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => <ActionCell row={row} />,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Request</h1>
      </div>
      <BFTable columns={columns} data={products || []} />
      {/* <TablePagination totalPage={meta?.totalPage} /> */}
    </div>
  );
};

export default ManageListingRequests;
