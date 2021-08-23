Ở đất nước Yên Bình có $N$ mỏ vàng dọc theo bờ của dòng sông và mỏ vàng thứ $i$ có thể khai thác được $W_i$ tấn vàng. Để phục vụ khai thác vàng, người ta cần hợp nhất và phân phối lại các mỏ vàng sao cho có đúng $k$ đống vàng để  di chuyển vàng khai thác, ở các mỏ vàng có thể di chuyển được bằng xe tải theo quy tắc sau:
- Có thể di chuyển vàng ở hai mỏ vàng $i, j$ bất kì cho nhau với điều kiện $(0< i < j≤ N)$;
- Khi di chuyển số vàng từ vị trí $i$ sang vị trí $j$ hoặc là di chuyển hết số vàng qua $j$ hoặc là không di chuyển vàng tại $i$;
- Để di chuyển $W$ tấn vàng từ vị trí $x_i$ đến vị trí $x_j$ thì phải mất chi phí $|x_i-x_j|\times W$.

**Yêu cầu:** cho $N, K$ và số lượng vàng được sản xuất tại mỗi mỏ. Tính chi phí bé nhất để di chuyển số vàng.

## Dữ liệu vào:
- Dòng đầu ghi hai số $N, K$;
- $N$ dòng tiếp theo mỗi dòng ghi hai giá trị $x_i$ và $w_i$ tương ứng với vị trí và số lượng vàng khai thác được tại mỏ thứ $i$.

## Dữ liệu ra:
- Ghi ra giá trị bé nhất để hợp nhất số vàng khai thác được di chuyển về $K$ đống vàng.

### Ví dụ:
### Dữ liệu vào:
```
3 1
20 1
30 1
40 1
```

### Dữ liệu ra:
```
20
```

### Giải thích:
- Di chuyển vàng về đống $2$.

### Dữ liệu vào:
```
6 2
10 15
12 17
16 18
18 13
30 10
32 1
```

### Dữ liệu ra:
```
182
```

### Giải thích:
- Chuyển vàng ở vị trí $1,3,4$ về đống $2$; vị trí $6$ về đống $5$.

## Giới hạn:
- $1\le K\le N \le 5000; 0\le\ x_i, w_i \le\ 10^6$.