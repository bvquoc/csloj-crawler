Cho một bảng kích thước $M\times N$, được chia thành lưới ô vuông đơn vị $M$ dòng $N$ cột. Trên các ô của bảng ghi số $0$ hoặc $1$. Các dòng của bảng được đánh số $1, 2..., M$ theo thứ tự từ trên xuống dưới và các cột của bảng được đánh số $1, 2..., N$ theo thứ tự từ trái qua phải.

Hãy đếm số hình chữ nhật con của bảng mà có các cạnh song song với các cạnh của bảng và gồm toàn số $1$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $M$ và $N$ (là số hàng và số cột của HCN);
- $M$ dòng tiếp theo, dòng thứ $i$ chứa một xâu có độ dài $N$ chỉ chứa các số $0$ và $1$ mô tả dòng thứ $i$ của bảng.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là số HCN đếm được.

## Ví dụ:
#### Dữ liệu vào:
```
4 3
111
101
111
001
```

#### Dữ liệu ra:
```
24
```

## Giới hạn:
- $1 ≤ m, n ≤ 10^3$.