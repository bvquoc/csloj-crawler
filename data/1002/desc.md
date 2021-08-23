**<center>NGUỒN: PreVNOI Ⅸ (BẮC GIANG 2019)</center>**
<br>

Một nhóm nhân viên khai mỏ có dự định tiến vào một hầm mỏ dài và rất hẹp. Vì rất hẹp và dài, nên chỉ người vào cuối cùng mới có thể rời khỏi hầm mỏ. Ban đầu, hầm mỏ trống. Ở cửa hầm mỏ, chúng ta ghi lại thời gian một ai đó vào và ra hầm mỏ. Mỗi người thợ mỏ không được ở trong hầm mỏ quá $m$ đơn vị thời gian. Hãy đếm xem có bao nhiêu tình huống khác nhau có thể xảy ra. Hai tình huống được xem là khác nhau, nếu tồn tại một thời điểm nào đó mà trong tình huống này, người $i$ có trong hầm mỏ, trong tình huống khác, người $i$ không có trong hầm mỏ. Các công nhân khai mỏ được đánh số từ $1$ đến $n$. Công nhân khai mỏ thứ $i$ không được vào hầm mỏ trước công nhân khai mỏ thứ $i – 1$ (Công nhân $1$ là người vào đầu tiên).

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên $n$ và $m$, trong đó $1 ≤ n ≤ 2.10^5$ và $1 ≤ m ≤ 10^6$
- Dòng thứ hai ghi $2n$ số nguyên dương  $1 ≤ a_1 < a_2 < … < a_{2n} ≤ 10^6$ là thời điểm (tính từ đầu ngày) có một người thợ mỏ vào hoặc ra hầm mỏ

## Dữ liệu ra:
- In ra kết quả theo <samp>**modulo**</samp> $1000003$

## Ví dụ:
### Dữ liệu vào:
```
3 6
1 2 3 7 9 10
```

### Dữ liệu ra:
```
2
```

### Giải thích:
- Có 3 người thợ mỏ. Giả sử người đầu $(A)$ vào mỏ ở thời điểm $1$:
    - Nếu $A$ rời mỏ ở thời điểm $2$, thì người $2\ (B)$ sẽ vào mỏ ở thời điểm $3$. Do không được ở trong mỏ ở quá $6$, nên $B$ không thể rời mỏ ở thời điểm $10$. $B$ không thể rời mỏ ở thời điểm $9$ vì khi đó ở thời điểm $7$ có người thứ $3$ đi vào và chặn lỗi ra. Do đó $B$ chỉ có thể rời ở thời điểm $7$. Và người thứ $3$ đến và đi ở thời điểm $9$, $10$. Đây là tình huống $\#1$.
    - Nếu $A$ rời mỏ ở thời điểm $7$, thì $(2, 3)$ và $(9, 10)$ là hai thời điểm đến và đi của hai người khác nhau, đây là tình huống $\#2$.
    - $A$ không thể rời mỏ ở thời điểm $3$ (vì thời điểm $2$ có người đến và phong tỏa không cho $A$ ra).
- Vậy chỉ có thể có $2$ tình huống.

## Giới hạn:
- $10\%$ số test có $n ≤ 10$
- $10\%$ số test khác có $n ≤ 200, m = 10^6$
- $30\%$ số test khác có $n ≤ 200$
- $40\%$ số test khác có $n ≤ 2000$
- $10\%$ số test còn lại không có ràng buộc gì thêm