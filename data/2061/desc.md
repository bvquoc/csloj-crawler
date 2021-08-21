**<center>Nguồn: Free Contest 8 (9)</center>**

Xứ Lineland có $n$ thành phố, giữa thành phố thứ $i$ và $i+1$ có đường nối hai chiều. Mỗi lần vào thành phố $i$ thì phải mua vé thu phí giao thông $a_i$. Tuy vậy cũng có thành phố không thu phí $(a_i  = 0)$, thậm chí có thành phố còn tặng thêm tiền để khuyến khích mọi người tới mua bán $(a_i < 0)$.
<center><img src="/images/problems/2061/delivery.png" width=500px /></center>

Công ty giao hàng tại nhà có $2$ trụ sở đóng ở thành phố thứ $1$ và thành phố $n$. Có một đơn giao hàng tới $n$ người ở $n$ thành phố khác nhau. Mỗi chuyến đi, xe chỉ chở được một mặt hàng cho một người. Việc giao hàng phải thực hiện theo nguyên tắc từ gần đến 
xa: chỉ được đi ngang qua các thành phố đã giao hàng. Xe của công ty có một quyền ưu đãi: chỉ cần mua vé lượt đi, còn lúc về không phải mua vé (và cũng không nhận được tiền tặng). Xe ở trụ sở nào thì phải quay về trụ sở đó.

**Yêu cầu:** Xác định chi phí giao hàng nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n\ (1 ≤ n  ≤ 10^6)$;
- Dòng thứ hai chứa $n$ số nguyên $a_1, a_2, \dots a_n\ (|a_i|\le 10^4)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là chi phí giao hàng nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
4
1 1 1 5
```

#### Dữ liệu ra:
```
3
```