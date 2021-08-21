Cho một bảng kích thước $M\times N$, được chia thành lưới ô vuông đơn vị $M$ dòng $N$ cột. Trên các ô của bảng ghi số $0$ hoặc $1$. Các dòng của bảng được đánh số $1, 2..., M$ theo thứ tự từ trên xuống dưới và các cột của bảng được đánh số $1, 2..., N$ theo thứ tự từ trái qua phải.

Hãy tìm một hình chữ nhật gồm các ô của bảng thoả mãn các điều kiện sau:
- Hình chữ nhật đó chỉ gồm các số $1$;
- Cạnh hình chữ nhật song song với cạnh bảng;
- Diện tích hình chữ nhật là lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $M$ và $N$ (là số hàng và số cột của HCN);
- $M$ dòng tiếp theo, dòng thứ $i$ chứa một xâu có độ dài $N$ chỉ chứa các số $0$ và $1$ mô tả dòng thứ $i$ của bảng.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là diện tích lớn nhất của HCN thỏa yêu cầu bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
4 8
00010000
00111000
11111110
00111000
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- HCN có diện tích lớn nhất có tọa độ trái trên là $(2, 2)$, phải dưới là $(4, 5)$ tổng diện tích là $9$ ô đơn vị.

## Giới hạn:
- $1 ≤ m, n ≤ 10^3$.