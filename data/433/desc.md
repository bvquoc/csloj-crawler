Trò chơi với băng số là trò chơi tham gia trúng thưởng được mô tả như sau: Có một băng hình chữ nhật được chia ra làm $n$ ô vuông, đánh số từ trái qua phải bắt đầu từ $1$. Trên ô vuông thứ $i$ người ta ghi một số nguyên dương $a_i, i = 1, 2, ..., n$. Ở một lượt chơi, người tham gia trò chơi được quyền lựa chọn một số lượng tùy ý các ô trên băng số. Giả sử theo thứ tự từ trái qua phải, người chơi lựa chọn các ô $i_1, i_2, ..., i_k$. Khi đó điểm số mà người chơi đạt được sẽ là: $a_{i_1} - a_{i_2} + ... + (-1)^{k-1}a_{i_k}$

Hãy tính số điểm lớn nhất có thể đạt được từ một lượt chơi.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$;
- Dòng thứ hai chứa $N$ số nguyên $a_1, a_2, …, a_N$, mỗi số cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là giá trị lớn nhất có thể thực hiện được ở một lượt chơi.

## Ví dụ:
#### Dữ liệu vào:
```
7
4 9 2 4 1 3 7
```

#### Dữ liệu ra:
```
17
```

#### Giải thích:
- Ta lần lượt chọn $5$ số như hình sau:
 <center><img src="/images/problems/433/DPLINEGAME.jpg" width=250px></center>

## Giới hạn:
- $1 ≤ N ≤ 10^6, 1 ≤ a_i ≤ 10^4$.