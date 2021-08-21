<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Bill là một đại gia lớn trong ngành công nghệ. Tính tình nhàn rỗi sinh nông nổi, Bill thường xuyên đi phát kẹo cho các em nhỏ trên khắp thế giới. Một lần tới vùng duyên hải Bắc Bộ xa xôi, thấy các em học sinh say mê Tin học, Bill rất muốn làm gì đó cho các em được vui. Chả là mang theo một chiếc robot tự động phát kẹo. Do lỗi phần mềm, chiếc máy này chỉ có thể phát kẹo ra đúng ~n~ lần, lần thứ ~i~ phát  ~a_i~ chiếc kẹo. Rất không muốn các em tranh nhau, Bill dự định mang robot đi lần lượt tới từng em, từ em thứ nhất tới em thứ ~m~ và em đó sẽ nhận được một số lần phát kẹo liên tiếp tiếp theo từ phía robot. Biết em thứ ~i~ muốn ăn tối thiểu ~b_i~ chiếc kẹo nên Bill không thể để robot phát ít hơn số kẹo này. Với mỗi em, chênh lệch giữa số kẹo nhận được và số kẹo tối thiểu em đó muốn ăn gọi là độ lệch của cách chia cho em đó. Độ lệch chung là tổng các độ lệch của ~m~ em.

Hãy giúp Bill xác định độ lệch chung nhỏ nhất có thể được.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n~ và ~m\ (1 ≤ n ≤ 10^5, 1 ≤ m ≤ 100)~;
- Dòng thứ hai chứa ~n~ số nguyên ~a_1, a_2, …, a_n\ (1 ≤ a_i ≤ 10^4, i =1 ÷ n)~;
- Dòng thứ ba chứa ~m~ số nguyên ~b_1, b_2, …, b_m\ (1 ≤ b_j ≤ 10^9, j = 1 ÷ m)~.

## Dữ liệu ra:
- Đưa ra một số nguyên – độ lệch chung nhỏ nhất tìm được. Nếu không tồn tại cách phân chia phù hợp thì đưa ra số ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
1 2 3
3 2
```

#### Dữ liệu ra:
```
1
```