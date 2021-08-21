**<center>NGUỒN: Đề thi chọn đội tuyển HSGQG - Đà Lạt - Năm 2019-2020</center>**

Bé Sen mới mua một căn biệt thự lớn và hiện đại. Biệt thự có thể được biểu diễn bởi một hình chữ nhật được chia làm $M$ cột và $N$ hàng. Các cột được đánh số từ $1$ tới $M$ theo chiều từ trái qua phải (chiều hướng Tây đến Đông). Các hàng được đánh số từ $1$ tới $N$ theo chiều từ dưới lên trên (chiều hướng Nam đến Bắc). Biệt thự có $M×N$ phòng, phòng nằm trên cột $i$ hàng $j$ được ký hiệu là $(i, j)$. Hai phòng có chung cạnh sẽ có một cửa nối giữa chúng. Ban đầu, tất cả các cửa nối hai phòng theo hướng Nam-Bắc được mở, các cửa còn lại bị đóng. Để đi qua một cánh cửa mở thời gian đi mất $1$ phút. Một số căn phòng được đặt công tắc kiểm soát trạng thái của các cửa. Khi ấn, đè công tắc trong vòng $1$ phút, mọi cánh cửa đang đóng sẽ mở, và mọi cánh cửa đang mở sẽ đóng.

**Yêu cầu:** Xác định thời gian ngắn nhất đi từ phòng $(1, 1)$ tới phòng $(M, N)$.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên $M, N, K\ (2 ≤ M, N ≤ 10^5; 1≤ K ≤ 2×10^5)$;
- Tiếp theo là $K$ dòng, mỗi dòng gồm hai số nguyên $x, y\ (1≤ x ≤ M, 1 ≤ y ≤ N)$ mô tả phòng $(x, y)$ có đặt công tắc ($K$ phòng có công tắc là phân biệt$.

## Dữ liệu ra:
- Ghi ra một dòng chứa số nguyên là số phút ít nhất để đi từ phòng $(1, 1)$ tới phòng $(M, N)$. Nếu không đi được, in ra $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
3 2 1
1 2
```

## Dữ liệu ra:
```
4
```

## Dữ liệu vào:
```
3 2 1
2 1
```

#### Dữ liệu ra:
```
-1
```

#### Giải thích:
<center><img src="/images/problems/1379/MANSION.jpg" width="800px" /></center>

## Giới hạn:
- Subtask $\#1: 30\%$ số điểm của bài có $M, N ≤ 1000$;
- Subtask $\#2: 40\%$ số điểm của bài có $K ≤ 2000$;
- Subtask $\#3: 30\%$ số điểm còn lại không có ràng buộc gì thêm.