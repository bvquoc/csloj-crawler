**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 1 - Ôn Hải Phòng T11/2020</center>**

Cho bảng gồm $M$ dòng và $N$ cột. Mỗi ô được đánh số từ $1$ đến $M×N$. Ô giao bởi hàng $i$ và cột $j$ được đánh số $i+(j-1)*M$.

Có tất cả $P$ ô bị cấm, ô đầu tiên là ô đánh số $Q$, các ô tiếp theo được tính theo công thức $Q_i=((Q_{i-1}*A+B)mod C)+1$.

Từ một ô đánh số $x$ bạn được di chuyển:
- Xuống dưới: sang ô $x+1$;
- Sang phải: sang ô $x+M$;
- Theo đường chéo xuống dưới, sang phải: sang ô $x+M+1$;

**Yêu cầu:** Chọn một ô tùy ý, tìm đường đi dài nhất qua ít nhất $k$ ô sao cho không đi qua ô cấm, không đi ra ngoài bảng.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $M,N,K\ (1≤M,N≤3000,1≤K<M+N)$;
- Dòng thứ hai chứa năm số nguyên $P,Q,A,B,C\ (1≤A,B,C,P<Q≤M×N)$.

## Dữ liệu ra:
- Dòng đầu ghi độ dài đường đi dài nhất tìm được hoặc $-1$ nếu không tồn tại đường đi thỏa mãn;
- Nếu dòng đầu khác $-1$ thì dòng thứ hai mô tả đường đi từ ô xuất phát đến ô kết thúc.

## Ví dụ:
### Dữ liệu vào:
```
5 6 7
13 1 8 5 29
```

### Dữ liệu ra:
```
8
6 11 16 17 18 24 25 30
```

### Giải thích:
<center><img src="/images/problems/1344/DMAZE.svg" width="450px" /></center>

- Các ô cấm: $1, 14, 2, 22, 8, 12, 15, 10, 28, 27, 19, 13$ và $23$;
- Các đường đi thỏa mãn:
    - $6 → 11 → 16 → 17 → 18 → 24 → 25 → 30$;
    - $6 → 11 → 16 → 17 → 18 → 24 → 29 → 30$.

**Chú ý:**
- Nếu trả lời đúng độ dài đường đi mà không in đường đi thì được $30\%$ số điểm của test.