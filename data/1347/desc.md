**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 - Ôn Hải Phòng T11/2020</center>**

Cho bảng gồm $M$ dòng và $N$ cột. Mỗi ô được đánh số từ $1$ đến $M\times N$. Ô giao bởi hàng $i$ và cột $j$ được đánh số $i+(j-1)\times M$.

Bảng được chia thành nhiều trường, mỗi trường có đúng $k$ cột (trừ trường cuối).

Từ một ô đánh số $x$ bạn được di chuyển:
- Theo đường chéo lên trên, sang phải: sang ô $x+M-1$;
- Sang phải: sang ô $x+M$;
- Theo đường chéo xuống dưới, sang phải: sang ô $x+M+1$.

Trong trường đầu tiên, có tất cả $P$ ô bị cấm, ô đầu tiên là ô đánh số $Q$, các ô tiếp theo được tính theo công thức $Q_i=((Q_{i-1}\times A+B)\text{ mod }C)+1$.

Trong các trường tiếp theo, các ô cấm lại được lặp lại, nói cách khác nếu ô $x$ bị cấm thì ô $x+K\times M$ cũng là ô cấm.

**Yêu cầu:** Chọn một ô tùy ý ở trường thứ nhất, đếm số đường đi từ ô đó đến một ô ở cột $N$ sao cho không đi qua ô cấm, không đi ra ngoài bảng.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $M,N,K$;
- Dòng thứ ha chứa năm số nguyên $P,Q,A,B,C\ (1≤A,B,C,P<Q≤M\times K)$.

## Dữ liệu ra:
- Ghi ra số lượng đường tìm được theo modul $10^9+7$.

## Ví dụ:
### Dữ liệu vào:
```
4 8 3
7 1 2 7 11
```

### Dữ liệu ra:
```
12
```

### Giải thích:
<center><img src="/images/problems/1347/bmaze.svg" width="500px" /></center>

Các đường đi:
- $3 → 8 → 11 → 15 → 20 → 23 → 27 → 32$;
- $3 → 8 → 11 → 15 → 20 → 24 → 27 → 32$;
- $3 → 8 → 12 → 15 → 20 → 23 → 27 → 32$;
- $3 → 8 → 12 → 15 → 20 → 24 → 27 → 32$;
- $8 → 11 → 15 → 20 → 23 → 27 → 32$;
- $8 → 11 → 15 → 20 → 24 → 27 → 32$;
- $8 → 12 → 15 → 20 → 23 → 27 → 32$;
- $8 → 12 → 15 → 20 → 24 → 27 → 32$;
- $11 → 15 → 20 → 23 → 27 → 32$;
- $11 → 15 → 20 → 24 → 27 → 32$;
- $12 → 15 → 20 → 23 → 27 → 32$;
- $12 → 15 → 20 → 24 → 27 → 32$;

## Giới hạn:
- Subtask $\#1: 17\%$ số điểm có $M≤10; N≤10^4; K=N$;
- Subtask $\#2: 32\%$ số điểm khác có $M≤10; 10^4≤N≤10^8; K=10^4$;
- Subtask $\#3: 51\%$ số điểm còn lại có $M≤100;  K≤N≤10^{16}; K≤10^4$.