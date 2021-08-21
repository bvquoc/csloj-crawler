**<center>Nguồn:  Free Contest 06</center>**

Nông dân John có một trang trại với $N$ cái cọc. Các cọc này được đặt trên một đường thẳng ở các vị trí $x_1, x_2, …, x_n$.

Trang trại này có $C$ con bò. Những con bò này không thích những chiếc cọc cho lắm. Chúng trở nên hung dữ khi bị buộc vào những chiếc cọc. Để tránh việc các con bò làm đau nhau, nông dân John muốn đặt mỗi con bò vào một cái cọc, sao cho khoảng cách nhỏ nhất giữa hai con bò bất kì là lớn nhất. 

Hãy tìm giá trị lớn nhất này.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên dương $N$ và $C\ (2 ≤ C ≤ N ≤ 100000)$;
- $N$ dòng tiếp theo, mỗi dòng chứa một số nguyên $x_i$ mô tả vị trí của một cây cọc $(0 ≤ x_i ≤ 10^9)$.

## Dữ liệu ra:
- In ra giá trị lớn nhất của khoảng cách nhỏ nhất giữa hai con bò bất kì.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
1
2
8
4
9
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Nông dân John có thể đặt các con bò vào các vị trí $1, 4$ và $8$, khi đó, khoảng cách bé nhất giữa hai con bò bất kì là $3$.