**<center>Nguồn: Bài tập thầy Nguyễn Thanh Bình ôn Hải phòng - Ngày 10 tháng 11 năm 2020 (am)</center>**

Cho số nguyên dương $𝑆$. Hãy đếm số cách phân tích $𝑆$ thành tổng các số nguyên dương sao cho ước chung lớn nhất của các số này là $1$.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $𝑇\ (𝑇 ≤ 10)$ là số lượng bộ dữ liệu;
- $T$ dòng tiếp theo, mỗi dòng chứa một số nguyên $𝑆\ (0 < 𝑆 ≤ 10^9)$ mô tả bộ dữ liệu tương ứng.

## Dữ liệu ra:
- Ghi ra $𝑇$ dòng, mỗi dòng một số nguyên là kết quả tìm được. Vì con số này có thể rất lớn nên bạn chỉ cần in ra phần dư của nó khi chia cho $10^9+7$.

## Ví dụ:
#### Dữ liệu vào:
```
2
1
4
```

#### Dữ liệu ra:
```
1
6
```

#### Giải thích:
- Trường hợp thứ nhất chỉ có bộ $\{1\}$ thỏa mãn;
- Trường hợp thứ hai có $6$ bộ $\{1,1,1,1\},\{1,1,2\},\{1,2,1\},\{2,1,1\}\{1,3\},\{3,1\}$.

## Giới hạn:
- Subtask $\#1: 30\%$ số điểm của bài có $𝑆 ≤ 10$;
- Subtask $\#2: 70\%$ số điểm còn lại của bài có $𝑆 ≤ 10^9$.