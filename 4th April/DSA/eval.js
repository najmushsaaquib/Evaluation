function runProgram(input) {
    input=input.trim().split("\n")
    let n=+input[0]
    let line=1
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(input[line++].trim().split(" ").map(Number))
    }
    rotateMat(n,n,arr)
   
  }
  
  function rotateMat(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break
        prev = mat[row + 1][col];
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
 console.log(mat)
    // // Print rotated matrix
    // for(let i = 0; i < R; i++)
    // {
    //     for(let j = 0; j < C; j++)
    //         document.write( mat[i][j] + " ");
             
    //     document.write("<br>");
    // }
}
  
  
  if (process.env.USERNAME === "sd120") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }