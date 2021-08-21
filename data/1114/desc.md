<!--
**<center>NGUỒN: VOI Training Camp 3H  Task ACM</center>**
-->
Người ta thường phải làm việc với các ma trận có tính chất đặc biệt. Một trong số các loại đó là ma trận **trội chéo**. Ma trận $A$ kích thước $n×n$ được gọi là trội chéo nếu thỏa mãn các điều kiện sau:
1.	$A_{ij}  ≥ 0\text{ với } \forall i, j$
2.	$A_{ii}  ≥ \sum_{j=1}^{i-1}A_{ij}+\sum_{j=i+1}^{n}A_{ij}  (1 ≤ i ≤ n)$
3.	Có ít nhất một $i$ sao cho $A_{ii} >  \sum_{j=1}^{i-1}A_{ij}+\sum_{j=i+1}^{n}A_{ij}$

Phần tử thỏa mãn điều kiện $3$ được gọi là phần tử trội.

**Yêu cầu**: Cho $n$ và ma trận $A$, các phần tử của ma trận $A$ đều nguyên $(0 ≤ A_{ij} ≤ 1000, 2 ≤ n ≤ 1000)$. Hãy xác định xem $A$ có phải là ma trận trội chéo hay không, nếu có thì đưa ra số lượng phần tử trội.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n$
- Dòng thứ $i$ trong $n$ dòng sau chứa $n$ số nguyên xác định dòng thứ $i$ của ma trận.

## Dữ liệu ra:
- Dòng thứ nhất chứa thông báo `YES` hoặc `NO`
- Nếu kết quả là `YES` thì dòng thứ $2$ chứa một số nguyên là số phần tử trội.

## Ví dụ:
#### Dữ liệu vào:
```
3
10 5 5
0 1 0
2 2 5
```

#### Dữ liệu ra:
```
YES
2
```