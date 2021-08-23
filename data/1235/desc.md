**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 3</center>**

Bờm mới sưu tầm được một bài toán trên lưới ô vuông sau đây: Cho lưới ô vuông kích thước $N×N$ trong đó trên mỗi ô có ghi một chữ cái và một xâu $S$ gồm đúng $2N-1$ chữ cái. Bắt đầu từ ô ở góc trên bên trái cần di chuyển đến ô ở góc đưới bên phải, trong quá trình di chuyển, từ một ô chỉ được phép di chuyển sang ô kề cạnh ở bên phải hoặc ở phía dưới. Cần xác định xem có bao nhiêu cách di chuyển mà dãy các chữ cái trong các ô trên đường di chuyển tạo thành xâu $S$ cho trước.

**Yêu cầu:** Hãy xác định số lượng đường di chuyển thoả mãn các điều kiện đặt ra.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $N\ (2 ≤ N≤ 1000)$ - là kích thước lưới;
- Mỗi dòng trong $N$ dòng tiếp theo chứa $N$ chữ cái trong bảng chữ cái latin mô tả báng chữ cái. Các chữ cái ghi liên tục không có dấu cách.
- Dòng cuối chứa xâu $S$ độ dài $2N - 1$ ký tự.

## Dữ liệu ra:
- Ghi ra một số nguyên $k$ là số lượng cách di chuyển thoả mãn các điều kiện đặt ra. Nếu $k ≥ 1000003$, hãy ghi phân dư của phép chia $k$ cho $1000003$.

## Vị dụ:
### Dữ liệu vào:
```
3
loc
ogo
gos
logos
```

### Dữ liệu ra:
```
5
```

### Giải thích:
- Có $5$ cách di chuyển tạo thành xâu `logos` như hình sau:
<center><img src="/images/problems/1235/CPATH.svg" width="500px" /></center>