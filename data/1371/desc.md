<!--
**<center>NGUỒN: Hội thảo Duyên Hải 2016 - Lê Thanh Bình</center>**
-->
Hàng ngày, $N$ con bò của nông dân John (FJ) đánh số từ $1$ đến $N$ lần lượt ra khỏi chuồng và đi ăn cỏ trên cánh đồng riêng của mình. Các đồng cỏ có cấu trúc như là một cây với chuồng bò ở cánh đồng $1$. Có đúng $N-1$ con đường hai chiều nối giữa các cánh đông. Con đường $i$ nối từ cánh đồng $A_i$ đến cánh đồng $B_i\ (1≤A_i≤N, 1≤B_i≤N)$.

Con bò $i$ có cánh đồng của riêng mình mang số hiệu $P_i$. Cánh cửa của chuồng bò là nhỏ nên các con bò ra khỏi chuồng đi ăn cỏ theo thứ tự từ con bò số $1$ đến con bò số $N$. Khi con bò trước đến cánh đồng của mình rồi thì con bò tiếp theo mới ra khỏi chuồng (trước tiên con bò $1$ đến cánh đồng $P_1$, tiếp theo con bò $2$ đến cánh đồng $P_2$,...).

Khi con bò $i$ trên đường từ chuồng đến cánh đồng của mình, nếu đi qua một cánh đồng đã có con bò ăn cỏ trên đó thì nó phải đi vòng men cánh đồng để tránh đụng độ với con bò này - điều này làm cho tốc độ đến cánh đồng của nó chậm lại (!).  Hãy tính xem với mỗi con bò, khi đến cánh đồng của mình phải đi vòng bao nhiêu lần?

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $N\ (N\le 10^5)$;
- $N-1$ dòng tiếp theo, dòng thứ $i$ mô tả một con đường gồm hai số $A_i, B_i$;
- $N$ dòng cuối, dòng thứ $j$ ghi số $P_j$.

## Dữ liệu ra:
- Gồm $N$ dòng, dòng thứ $i$ ghi số lần mà con bò $i$ phải đi vòng trên con đường đến cánh đồng của mình.

## Ví dụ:
### Dữ liệu vào:
```
5
1 4
5 4
1 3
2 4
4
2
1
5
3
```

### Dữ liệu ra:
```
0
1
0
2
1
```