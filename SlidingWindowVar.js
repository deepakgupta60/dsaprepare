(function main(){
    let ans = subArray();
    console.log("Answer: ", ans)
  }())
  
  
  function subArray()
  {
    let s="abacd";
    
    let mp = new Map();
    let k=3
    let left=0, right=0, ans=0;
    while(right<s.length)
      {
        if(mp.has(s[right])==false)
          {
            mp.set(s[right], 1)
          }
        else
          {
            mp.set(s[right], mp.get(s[right])+1);
          }
        
        while(mp.size>k)
          {
            mp.set(s[left], mp.get(s[left])-1)
            if(mp.get(s[left])==0)
              {
                mp.delete(s[left])
              }
            left++
          }
        
        ans = Math.max(ans, right-left+1)
        right++
      }
    return ans
    
  }
  
  
  
  // (function main(){
    
  //   // console.log("test")
  
  //   let ans = subArrSizeK();
  //   console.log("Answer: ", ans)
  // }())
  
  
  
  // function subArrSizeK()
  // {
  //   let arr = [100,200,1900,400,500,900]
  //   let n = arr.length;
  //   let k=2
  //   let left=0, right=k-1;
  //   // find the first valid window..
  //   let currSum=0;
  //   for(let i=left;i<=right;i++)
  //     {
  //       currSum=currSum+arr[i];
  //     }
    
  //   // i=0;i<=1;i++ ==> 
  //   // i=0, [100]
  //   // i=1, [300]
    
  //   let maxsum = currSum;
  //   // 300
    
  //   // 1<5-> 1,2,3,4
  //   while(right<n-1)
  //     {
  //       left++; // 1,2,3,4
  //       right++; //2, 3, 4,5
  //       currSum=currSum+arr[right]-arr[left-1]; // 300+1900-100 = 2100+400-200 = 2300+500-1900 = 900+900-400 = 1400
  //       if(maxsum<currSum) //300 // 2100<2300 
  //         {
  //           maxsum=currSum // 2100 // 2300
  //         }
  //       console.log(currSum)
  //     }
  //   return maxsum
  // }
  
  // // 
  
  
  
  
  
  
  
  // // (function maiasdasdfn(){
    
  // //   let ans = largestSum()
    
  // //   console.log("Answer: ", ans)
  
  // // }())
  
  
  // // function largestSum()
  // // {
  // //   let arr = [-2,-3,4,-1,-2,1,5,-3];
  // //   let n=arr.length;
    
  // //   let maxSoEnd=0;
  // //   let maxSoFar=-Infinity;
    
  // //   for(let i=0;i<n;i++)
  // //     {
  // //       maxSoEnd = arr[i]+maxSoEnd;
  // //       if(maxSoFar<maxSoEnd)
  // //         {
  // //           maxSoFar=maxSoEnd;
  // //         }
  // //       if(maxSoEnd<0)
  // //         {
  // //           maxSoEnd=0
  // //         }
  // //     }
    
  // //   return maxSoFar
    
  // // }
  
  
  // // // function findEqual()
  // // //   {
  // // //     let arr = [2,5,9,6,8,-1,9]
  // // //     let n=arr.length;
      
      
  // // //     let prefix = new Array(n);
  // // //     for(let i=0;i<n;i++)
  // // //       {
  // // //           if(i==0)
  // // //             {
  // // //               prefix[i]=arr[i]
  // // //             }
  // // //         else
  // // //           {
  // // //             prefix[i]=arr[i]+prefix[i-1];
  // // //           }
  // // //       }
  // // //     let suffix = new Array(n);
  // // //     for(let i=n-1;i>=0;i--)
  // // //       {
  // // //         if(i==n-1)
  // // //           {
  // // //             suffix[i]=arr[i]
  // // //           }
  // // //         else
  // // //           {
  // // //             suffix[i]=arr[i]+suffix[i+1];
  // // //           }
  // // //       }
  // // //     for(let i=1;i<n-1;i++)
  // // //       {
  // // //         if(prefix[i-1]==suffix[i+1])
  // // //           {
  // // //               return i    
  // // //           }
          
  // // //       }
      
  // // //     return []
  // // //   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // // // (function main()
  // // // {
  // // //   let ans = largestSum();
  // // //   console.log("Answer: ", ans)
  // // // }())
  
  // // // function largestSum()
  // // // {
  // // //   let maxSoFar=-Infinity;
  // // //   let maxEndingHere=0;
  // // //   let arr= [-2,-3,4,-1,-2,1,5,-3];
  // // //   let n = arr.length;
    
  // // //   for(let i=0;i<n;i++)
  // // //     {
  // // //       maxEndingHere=maxEndingHere+arr[i];
  // // //       if(maxSoFar<maxEndingHere)
  // // //         {
  // // //           maxSoFar=maxEndingHere    
  // // //         }
  // // //       if(maxEndingHere<0)
  // // //         {
  // // //           maxEndingHere=0
  // // //         }
  // // //     }
  // // //   return maxSoFar;
  // // // }
  
  // // // (function main(){
    
  // // //   let ans = findIndex()
  // // //   console.log(ans)
    
  // // // }())
  
  
  // // // function findIndex()
  // // // {
    
    
  // // //   let arr = [1,4,2,5]
  // // //   let n = arr.length;
    
  // // //   let prefix = new Array(n);
  // // //   for(let i=0;i<n;i++)
  // // //     {
  // // //       if(i==0)
  // // //         {
  // // //           prefix[i]=arr[i];
  // // //         }
  // // //       else
  // // //         {
  // // //           prefix[i]=arr[i]+prefix[i-1];
  // // //         }
  // // //     }
    
  // // //   // [1,5,7,12]
    
  // // //   let suffix = new Array(n);
    
  // // //   for(let i=n-1;i>=0;i--)
  // // //     {
  // // //       if(i==n-1)
  // // //         {
  // // //           suffix[i]=arr[i]
  // // //         }
  // // //       else
  // // //         {
  // // //           suffix[i]=arr[i]+suffix[i+1]
  // // //         }
  // // //     }
    
  // // //   // [12,11,7,5]
    
  // // //   0,1,2
  // // // for(let i=1;i<n-1;i++)
  // // //     {
  // // //       if(prefix[i-1]==suffix[i+1])
  // // //         {
  // // //           // return i
  // // //         }
  // // //     }
  // // // // i=1, prefix [1]==suffix [7]
  // // //   // i=2, prefix[5]==suffix[5], i
    
  // // //   return suffix
  // // // }
  
  
  
  
  // // // // (function main(){
  // // // //   // console.log("tet")
  // // // //   let ans = prefixSum()
  // // // //   console.log(ans)
  // // // // }())
  
  
  // // // // function prefixSum()
  // // // // {
     
  // // // //   let arr=[1,10,4,2,5]
  // // // //   let n = arr.length;
  // // // //   // let prefix = new Array(n);
  // // // //   // for(let i=0;i<prefix.length;i++)
  // // // //   // {
  // // // //   //   if(i==0)
  // // // //   //     {
  // // // //   //       prefix[i]=arr[i];
  // // // //   //     }
  // // // //   //   else
  // // // //   //     {
  // // // //   //       prefix[i]=arr[i]+prefix[i-1]
  // // // //   //     }
  // // // //   // }
    
  // // // //   // i=0, prefix=1, [1]
  // // // //   // i=1, prefix=10+1, [1,11]
  // // // //   // i=2, prefix=[11+4], [1,11,15]
  // // // //   // i=3, prefix=[15+2], [1,11,15,17]
  // // // //   // i=4, prefix=[17+5], [1,11,15,17,22]
    
  // // // //   let suffix=new Array(n)
  // // // //   for(let i=n-1;i>=0;i--)
  // // // //     {
  // // // //       if(i==n-1)
  // // // //         {
  // // // //           suffix[i]=arr[i]
  // // // //         }
  // // // //       else
  // // // //         {
  // // // //           suffix[i]=arr[i]+suffix[i+1]
  // // // //         }
  // // // //     }
    
  // // // //   i=4, suffix[5], [5]
  // // // //   i=3, suffix[2+5],[7,5]
  // // // //   i=2, suffix[4+7],[11,7,5]
  // // // //   i=1, suffix[10+11],[21,11,7,5]
  // // // //   i=0, suffix[1+21],[22,21,11,7,5]
    
      
  // // // //   return suffix
  // // // // }
  
  
  
  
  
  
  
  
  // // // // // (function main(){
  // // // // //   // let ans = twoSum();
  // // // // //   // console.log("Answer: ", ans)
    
  // // // // //   console.log(mergeArr())
  // // // // // }())
  
  
  // // // // // function mergeArr()
  // // // // // {
  // // // // //   let arr=[9,12,13]
  // // // // //   let brr=[2,5,6,8,9]
  // // // // //   let m=arr.length
  // // // // //   let n=brr.length
    
  // // // // //   let idx1=0, idx2=0;
    
  // // // // //   let ans = []
  // // // // //   while(idx1<m && idx2<n)
  // // // // //     {
  // // // // //       if(arr[idx1]<=brr[idx2])
  // // // // //         {
  // // // // //           ans.push(arr[idx1])
  // // // // //           idx1++
  // // // // //         }
  // // // // //       else
  // // // // //         {
  // // // // //           ans.push(brr[idx2])
  // // // // //           idx2++
  // // // // //         }
  // // // // //     }
    
  // // // // //   while(idx1<m)
  // // // // //     {
  // // // // //       ans.push(arr[idx1])
  // // // // //       idx1++
  // // // // //     }
    
    
  // // // // //     return ans
    
  // // // // // }
  // // // // //   //
  // // // // //   0<3 && 0<5, ans=[2], idx2=1
  // // // // //   0<3 && 1<5, ans=[2,5], idx2=2
  // // // // //   0<3 && 2<5, ans=[2,5,6], idx2=3
  // // // // //   0<3 && 3<5, ans=[2,5,6,8], idx2=4
  // // // // //   0<3 && 4<5, ans=[2,5,6,8,9], idx2=4, idx1=1
  // // // // //   1<3 && 4<5, ans=[2,5,6,8,9,9], idx2=5, idx1=1
    
  // // // // //   // 1<3 && 5<5 -> false condition
  // // // // //   // while(idx1<m)
  // // // // //   // 0<3,  ans=[2,5,6,8,9,9]
  // // // // //   1<3,  ans=[2,5,6,8,9,9,12]
  // // // // //   2<3,  ans=[2,5,6,8,9,9,12,13]
    
  
  // // // // // TC: 0(n+m)
  // // // // // SC: 0(n+m)
    
    
    
  // // // // //   // while(idx1<m)
  // // // // //   //   {
  // // // // //   //     ans.push(arr[idx1])
  // // // // //   //     idx1++
  // // // // //   //   }
  // // // // //   // while(idx2<n)
  // // // // //   //   {
  // // // // //   //     ans.push(brr[idx2])
  // // // // //   //     idx2++
  // // // // //   //   }
  
  
  // // // // // // function mergeArr()
  // // // // // // {
  // // // // // //   let arr = [1,2,3];
  // // // // // //   let brr=[3,4,5];
  // // // // // //   return arr.concat(brr).sort((a,b)=>a-b)
  // // // // // //   // return arr
  // // // // // // }
  
  
    
  // // // // //   // for(let i=1;i<=15;i++)
  // // // // //   //   {
  // // // // //   //     if(i%3==0 && i%5==0)
  // // // // //   //       {
  // // // // //   //         console.log("FizzBuzz")
  // // // // //   //       }
  // // // // //   //     else if(i%3==0)
  // // // // //   //       {
  // // // // //   //         console.log("Fizz")
  // // // // //   //       }
  // // // // //   //     else if(i%5==0)
  // // // // //   //       {
  // // // // //   //         console.log("Buzz")
  // // // // //   //       }
  // // // // //   //     else
  // // // // //   //       {
  // // // // //   //         console.log(i)
  // // // // //   //       }
      
  // // // // //   //   }
    
    
  // // // // //   // let year=1700;
    
    
    
    
  // // // // //   // console.log(year%)
    
    
  // // // // //   // let msg=""
  // // // // //   // if(year%400==0)
  // // // // //   //   {
  // // // // //         // msg="Not Leap Year"
  // // // // //   //   }
  // // // // //   // else if(year%100==0)
  // // // // //   //   {
  // // // // //   //     // msg="Not Leap Year"
  // // // // //   //     console.log(year%100)
  // // // // //   //   }
  // // // // //   // else if(year%4==0)
  // // // // //   //   {
  // // // // //   //     msg="Leap Year"
  // // // // //   //   }
  // // // // //   // else {
  // // // // //   //   msg="Not Leap Year"
  // // // // //   // }
    
  // // // // //   // console.log(msg)
    
  // // // // //   // let n=10;
  // // // // //   // let ans = (n*(n+1))/2
    
  // // // // //   // console.log(ans)
  // // // // // //   let i=1;
  // // // // // //   let n=10;
    
  // // // // // //   while(i<=n)
  // // // // // //     {
  // // // // // //       console.log(i)
  // // // // // //       i++
  // // // // // //     }
  // // // // // // console.log("*********")
  // // // // // //   for(let i=1;i<=100;i++)
  // // // // // //     {
  // // // // // //       if(i<=18)
  // // // // // //         {
  // // // // // //           continue
  // // // // // //         }
  // // // // // //       console.log(i)
  // // // // // //     }
    
  // // // // //   // let x=10, y=-10;
  
  // // // // // //   let msg=""
  // // // // // //   if(x>0 && y>0)
  // // // // // //     {
  // // // // // //       msg=1
  // // // // // //     }
  // // // // // //   else if(x<0 && y>0)
  // // // // // //     {
  // // // // // //       msg=2
  // // // // // //     }
  // // // // // //   else if(x<0 && y<0)
  // // // // // //     {
  // // // // // //       msg=3
  // // // // // //     }
  // // // // // //   else
  // // // // // //     {
  // // // // // //       msg=4
  // // // // // //     }
  // // // // // //   console.log("Quadrant: ",msg)
    
  
  
  
  
  
  // // // // // function twoSum()
  // // // // // {
    
    
    
  // // // // //   // let arr = [2,4,5,9,8];
  // // // // //   // let arr2=[]
  // // // // //   // let target = 17
  // // // // //   // for(let i=0;i<arr.length;i++)
  // // // // //   //   {
  // // // // //   //     arr2.push([arr[i],i])
  // // // // //   //   }
    
  // // // // //   // arr2.sort((a,b)=>a[0]-b[0]);
  // // // // //   // console.log(arr2)
  // // // // //   // console.log(arr2[1])
  // // // // //   // console.log(arr2)
  // // // // //   // arr2.sort((a,b)=>a[])
    
  // // // // // // let n=arr2.length;
  // // // // // //   let left=0, right=n-1;
    
  // // // // // //   while(left<right)
  // // // // // //     {
  // // // // // //       let sum= arr2[left][0]+arr2[right][0];
        
  // // // // // //       if(sum==target)
  // // // // // //         {
  // // // // // //           return [ arr2[left][1], arr2[right][1]].sort((a,b)=>a-b)
  // // // // // //         }
  // // // // // //       else if(sum<target)
  // // // // // //         {
  // // // // // //           left++
  // // // // // //         }
  // // // // // //       else
  // // // // // //         {
  // // // // // //           right--
  // // // // // //         }
  // // // // // //     }
  // // // // // //       return []
    
  // // // // //   // for(let i=0;i<arr2.length;i++)
  // // // // //   //   {
  // // // // //   //     for(let j=i+1;j<arr2.length;j++)
  // // // // //   //     {
  // // // // //   //       if(arr2[i][0]+arr2[j][0]==target)
  // // // // //   //         {
  // // // // //   //           // return "hello"
  // // // // //   //           return [arr2[i][1],arr2[j][1]]
  // // // // //   //         }
  // // // // //   //     }
  // // // // //   //   }
  
  // // // // //   // for(let i=0;i<arr.length;i++)
  // // // // //   //   {
  // // // // //   //     for(let j=i+1;j<arr.length;j++)
  // // // // //   //       {
  // // // // //   //         return []
  // // // // //   //       }
  // // // // //   //   }
    
    
  // // // // //   return []
  
  // // // // // }
  
  // // // // // // initialization | Condition | Updation
  // // // // // // when need two pointer
  // // // // // // > when to optimize time complexity
  // // // // // // > more then 0(n)
  // // // // // // > 
  
  
  
  