<!--
**<center>NGUỒN: Ôn thầy Đỗ Đức Đông Tháng 11/2017 Ngày 6</center>**
-->

Xét hình hộp chữ nhật kích thước $𝑎 × 𝑏 × 𝑐$. Hình hộp có $𝑐$ tầng, các tầng được đánh số từ $1$ đến $𝑐$; trên mỗi tầng, có $𝑎$ hàng, các hàng được đánh số từ $1$ đến $𝑎$; trên mỗi hàng, có $𝑏$ khoảng, các khoảng được đánh số từ $1$ đến $𝑏$. Ô nằm ở khoảng $𝑗$ trên hàng thứ $𝑖$ của tầng $𝑘$ được đánh số $(𝑘 − 1) × 𝑎 × 𝑏 + (𝑖 − 1) × 𝑏 + 𝑗$.

Nhiệm vụ của bạn là xếp được càng nhiều thanh DOM có kích thước $1 × 1 × 2$ vào hình hộp, biết rằng giữa một số cặp ô chung cạnh có vách ngăn, do đó không thể đặt một thanh DOM vào hai ô này được.

## Dữ liệu vào:
- Dòng đầu chứa bốn số nguyên $𝑎, 𝑏, 𝑐$ và $𝑠\ (𝑠 ≤ 𝑎 × 𝑏 × 𝑐 ≤ 10000)$;
- Tiếp theo là $𝑠$ dòng, mỗi dòng chứa hai số nguyên $𝑝_𝑖, 𝑞_𝑖$ là hai ô kề cạnh được đánh số là $𝑝_𝑖, 𝑞_𝑖$ mà giữa hai ô có vách ngăn.

## Dữ liệu ra:
- Dòng đầu chứa số nguyên $𝑟$ là số lượng thanh DOM đặt được trong hình hộp;
- Tiếp theo là $𝑟$ dòng, mỗi dòng chứa hai số nguyên $𝑢_𝑖, 𝑣_i$ là hai ô kề cạnh được đánh số là $𝑢_𝑖, 𝑣_𝑖$ sẽ được đặt thanh DOM mà giữa hai ô đó không có vách ngăn.

## Ví dụ:
### Dữ liệu vào:
```
2 2 2 3
1 2
1 3
3 7
```

### Dữ liệu ra:
```
4
1 5
2 6
3 4
7 8
```

## Cách chấm điểm:
- Bạn sẽ bị điểm $0$ nếu đặt sai hoặc số lượng thanh DOM đặt được ít hơn số lượng thanh đặt được trong phương án tối ưu quá $10%$ thanh DOM.
- Ngược lại, điểm của bạn được tính bằng: $1000 \times (\frac{q}{p}-0.9)$ trong đó $𝑝, 𝑞$ tương ứng là số lượng thanh DOM đặt được trong phương án tối ưu và trong phương án của bạn.