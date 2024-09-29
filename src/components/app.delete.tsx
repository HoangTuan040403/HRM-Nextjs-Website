// "use client";
// import { useRouter } from 'next/navigation';


// export default function RemoveBtn({id}){
//     const router = useRouter();
//     const removeUser = async () =>{
//         const confirmed = confirm("Are you sure?");
//         if(confirmed){
//             const res = await fetch(`http://localhost:8080/user/admin/user?id=${id}`,{
//                 method: "DELETE",
//             });
//             if (res.ok){
//                 await router.refresh();
//             }
//         }
        
//     };
   
// }