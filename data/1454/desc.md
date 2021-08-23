**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Tại Hải Phòng T11/2020</center>**

Cho dãy số nguyên dương $𝑎_1, 𝑎_2, … , 𝑎_𝑛$. Tìm số nguyên dương $𝑥$ nhỏ nhất thỏa mãn hai điều kiện:
- $𝑥$ là số chính phương;
- $𝑥$ chia hết cho tất cả các số $𝑎_1, 𝑎_2, … , 𝑎_𝑛$.

Vì giá trị của $𝑥$ có thể rất lớn, bạn chỉ cần đưa ra số dư trong phép chia $𝑥$ cho $1000000007\ (10^9 + 7)$.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $𝑇 ≤ 10$ là số test. $𝑇$ nhóm dòng tiếp theo, mỗi nhóm gồm $2$ dòng chứa dữ liệu một test:
    - Dòng đầu chứa số nguyên dương $𝑛 ≤ 10^5$;
    - Dòng sau chứa $𝑛$ số nguyên dương $𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (∀𝑖: 𝑎_𝑖 ≤ 10^6)$.

## Dữ liệu ra:
- Ghi ra $𝑇$ dòng, mỗi dòng ghi một số nguyên duy nhất là số dư trong phép chia số $𝑥$ tìm được cho $1000000007\ (10^9 + 7)$.

## Ví dụ:
### Dữ liệu vào:
```
2
3
1 2 3
6
1 2 3 4 5 6
```

### Dữ liệu ra:
```
36
900
```