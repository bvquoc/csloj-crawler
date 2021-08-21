**<center>Nguồn:  Free Contest 02</center>**

Byteasar là một hacker có nhiều năng lực đã lọt vào kì thi Olympiad Hacking quốc tế năm nay (IHO). Một trong các bài toán của kỳ thi này liên quan tới việc thi đấu giữa hacker với nhà điều hành hệ thống: Có $N$ máy tính được đánh số từ $1$ đến $N$, nối với nhau theo mạch vòng, nghĩa là máy tính $i$ và $i + 1$ nối với nhau $(i = 1, …, n-1)$ và máy tính $n$ nối với máy $1$. Việc thi đấu được thực hiện như một trò chơi giữa hacker và nhà điều hành hệ thống:

- Byteasar được đi trước. Sau đó là nhà điều hành và Byteasar luân phiên nhau.
- Trong bước đầu tiên, Byteasar chọn một máy tính và hack nó.
- Trong bước đầu tiên, nhà điều hành hệ thống chọn một máy tính chưa bị hack và bảo vệ nó.
- Trong mọi bước đi tiếp theo, Byteasar hoặc là:
    - $(a)$ không làm gì, hoặc là
    - $(b)$ chọn một máy tính chưa bị hack và chưa được bảo vệ, đồng thời phải liên kết trực tiếp tới một máy tính đã bị hack để hack nó.
- Trong mọi bước đi tiếp theo, nhà điều hành hoặc là:
    - $(a)$ không làm gì, hoặc là
    - $(b)$ chọn một máy tính chưa bị hack và chưa được bảo vệ, đồng thời phải liên kết trực tiếp tới một máy tính đã được bảo vệ để bảo vệ nó.
- Trò chơi kết thúc ngay khi cả hai không làm gì trong hai bước liên tiếp.

Ban đầu, không có máy tính nào bị hack hoặc được bảo vệ. Mỗi máy tính $i$ có một giá trị là $v_i$ xác định giá trị của dữ liệu chứa trong nó. Khi máy tính $i$ bị hack, Byteasar chiếm được $v_i$ điểm.
Byteasar là một hacker rất khá, nhưng nó không có ý tưởng về thuật toán. Vì thế nó muốn bạn viết giúp một chương trình tính số điểm lớn nhất có thể chiếm được, giả sử nhà điều hành chơi tối ưu.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$, là số máy tính $(n ≥ 2)$;
- Dòng thứ hai chứa dãy $n$ số nguyên $v_1, v_2, …, v_n\ (1 ≤ v_i ≤ 2000)$; số $v_i$ xác định giá trị dữ liệu chứa trên máy tính $i$.

## Dữ liệu ra:
- In ra điểm lớn nhất mà Byteasar đạt được khi nhà điều hành chơi tối ưu.

## Ví dụ:
#### Dữ liệu vào:
```
4
7 6 8 4
```

#### Dữ liệu ra:
```
13
```

#### Dữ liệu vào:
```
5
1 1 1 1 1
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Trong ví dụ thứ nhất, đầu tiên Byteasar hack máy tính $2$ (được $6$ điểm). Nhà điều hành sẽ bảo vệ máy tính $3$. Bước tiếp theo Byteasar hack máy tính $1$ (được thêm $7$ điểm). Cuối cùng nhà điều hành bảo vệ máy tính $4$.

## Giới hạn:
- **Subtask** $\#1\ (20\%\text{ số điểm}): n ≤ 300$;
- **Subtask** $\#2\ (20\%\text{ số điểm}): n ≤ 5000$;
- **Subtask** $\#3\ (20\%\text{ số điểm}): n ≤ 500000$, hack máy $1$ là bước đi tối ưu của Byteasar;
- **Subtask** $\#4\ (40\%\text{ số điểm}): n ≤ 500000$.