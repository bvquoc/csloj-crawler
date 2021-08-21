**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

Ở Vương quốc Byteland có $𝑁$ thành phố đánh số $1, 2, ... 𝑁$. Thành phố $𝑖$ chọn số nguyên dương $𝑃_𝑖$ làm biểu tượng của mình. Một điều ngạc nhiên là chi  phí để xây dựng đường cao tốc nối trực tiếp giữa hai thành  phố lại phụ  thuộc vào con số biểu tượng của hai  thành phố này. Cụ thể, chi phí để xây dựng cao tốc nối thành phố $𝑖$ và thành phố $𝑗$ là $min (𝑃_𝑖 \% 𝑃_𝑗, 𝑃_𝑗 \% 𝑃_𝑖)$. Ở đây $𝑎 \% 𝑏$ được định nghĩa là phần dư của phép chia $𝑎$ cho $b$.

Hãy tìm cách giúp nhà Vua xây dựng được hệ thống đường cao tốc sao cho chỉ với hệ thống này đã đảm bảo sự đi lại giữa hai thành phố bất kỳ. Tất nhiên nhà Vua muốn tổng chi phí để xây dựng toàn bộ hệ thống cao tốc phải là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $𝑁\ (1 ≤ 𝑁 ≤ 10^5)$;
- $𝑁$ dòng tiếp theo, dòng thứ $𝑖$ ghi số nguyên dương $𝑃_𝑖\ (1 ≤ 𝑃_𝑖 ≤ 10^7, 𝑖 = 1 ÷ 𝑛)$.

## Dữ liệu ra:
- Một số nguyên duy nhất - Chi phí nhỏ nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
3
4
9
15
```

#### Dữ liệu ra:
```
4
```

## Giới hạn:
- Subtask $\#1: 30\%$ số điểm có $𝑁 ≤ 10^3$;
- Subtask $\#2: 40\%$ số điểm$𝑃_𝑖 ≤ 10^6$.