**<center>Nguồn:  Free Contest 03</center>**

Lũ bò của nông dân John lại gây náo loạn và xếp hàng một cách vô tổ chức! Hiện giờ chúng đang xếp thành một hàng $N$ con $(1 ≤ N ≤ 2000)$, con thứ $k$ được kí hiệu bằng chữ cái in hoa $C_k$. Để ổn định trật tự, John quyết định xếp chúng ra một hàng mới. Ban đầu, hàng này không chứa con bò nào. Ở mỗi bước, John sẽ nhặt ra con bò ở đầu hoặc cuối hàng hiện tại và chuyển nó xuống cuối hàng mới.
**Ví dụ:**
$\#1$     ACDBCB
$\#2$      CDBCB      A
$\#3$      CDBC       AB
$\#4$      CDB        ABC
$\#5$      CD         ABCB
$\#6$       D         ABCBC
$\#7$                 ABCBCD
Mô tả một cách xếp hàng

Hãy giúp nông dân John xếp lũ bò sao cho đi từ trái sang phải, xâu ghép từ kí hiệu của các chú bò có thứ tự từ điển nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N$;
- $N$ dòng tiếp theo, mỗi dòng chứa một chữ cái $C_k$.

## Dữ liệu ra:
- Đưa ra thứ tự sắp xếp tối ưu. Viết kết quả trên nhiều dòng, mỗi dòng gồm $80$ kí tự (dòng cuối có thể viết thiếu).

## Ví dụ:
### Dữ liệu vào:
```
6
A
C
D
B
C
B
```

### Dữ liệu ra:
```
ABCBCD
```