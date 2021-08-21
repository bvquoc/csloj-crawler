**<center>Nguồn: Free Contest 8 (9)</center>**

Mitrut có số tự nhiên $N$ và một cây có $N$ đỉnh. Cậu thắc mắc rằng có bao nhiêu cách để đặt $N$ số khác nhau vào cây, mỗi số trên một nút thỏa mản rằng số ở nút $A$ nhỏ hơn số của tất cả các nút là con của $A$. Gốc của cây luôn là nút $1$.

Do kết quả có thể rất lớn nên bạn chỉ cần tìm số dư khi chia kết quả tìm được với $666013$.

## Dữ liệu vào:
- Dòng đầu tiên ghi số $N\ (1 ≤N ≤ 100000)$;
- $N-1$ dòng tiếp theo, mỗi dòng ghi hai số nguyên $x$ và $y$, thể hiện có một cạnh nối giữa hai đỉnh $x$ và $y\ (x ≠y,1 ≤ x ≤ N , 1 ≤ y  ≤ N)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả cần tính.

## Giới hạn:
- $70\%$ số test có $N  ≤ 2000$;
- $10\%$ số test có $N ≤ 7$.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 2
3 1
2 4
2 5
```

#### Dữ liệu ra:
```
8
```

#### Giải thích:
- Với ví dụ trên, các cách để đánh số là:
<center><img src="/images/problems/2058/arbore.svg" width=800px /></center>