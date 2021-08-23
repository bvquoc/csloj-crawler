Hàng ngày, một khối lượng lớn khí đốt được vận chuyển từ Nga sang các nước Bắc Âu. Người ta mô hình hóa bài toán này như sau: Có $N$ điểm trung chuyển để vận chuyển khí đốt. Các điểm trung chuyển được đánh số từ $1$ đến $N$. Điểm trung chuyển từ Nga được đánh số là $1$, điểm cần vận tải đến ở Bắc Âu được đánh số $N$. Có $M$ con đường nối giữa các điểm trung chuyển này và biết chi phí vận chuyển khi đi qua các con đường này.

Để giảm chi phí vận chuyển, người ta muốn xây dựng không quá $K$ đường ống dẫn trên các con đường nối giữa các điểm trung chuyển này. Sau khi xây dựng, chi phí vận chuyển trên các con đường này giảm xuống còn $0$.

Bạn hãy viết chương trình xác định chi phí vận chuyển từ điểm trung chuyển $1$ đến $N$ là nhỏ nhất mà sau khi đã xây dựng được không quá $K$ ống dẫn khí đốt.

## Dữ liệu vào:
- Dòng đầu ghi ba số $N, M, K\ (1 ≤ N ≤ 10000, 1 ≤ M ≤ 50000, 1 ≤ K ≤ 20)$;
- $M$ dòng tiếp theo, mỗi dòng ghi ba số $a_i, b_i, c_i$ thể hiện một đường trung chuyển từ $a_i$ đến $b_i$ với chi phí là $c_i\ (1 ≤ a_i, b_i ≤ N, 1 ≤ c_i ≤ 10^6)$.

## Dữ liệu ra:
- Ghi một số duy nhất là chi phí vận chuyển từ điểm trung chuyển $1$ đến $N$ là nhỏ nhất mà sau khi đã xây dựng được không quá $K$ ống dẫn khí đốt.

## Ví dụ:
<center><img src="/images/problems/595/GASLINE.png" width="350px" /></center>

### Dữ liệu vào:
```
4 4 1
1 2 10
2 4 10
1 3 1
3 4 100
```

### Dữ liệu ra:
```
1
```