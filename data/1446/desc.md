**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Cho dãy $𝐴$ gồm $n$ số nguyên $𝑎_1, 𝑎_2, … , 𝑎_𝑛$ và một số nguyên dương $𝑘 ≤ 𝑛$.

**Yêu cầu:** Hãy chọn ra trong dãy này đúng $𝑘$ phần tử sao cho tích của $𝑘$ phần tử này lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa số $𝑇$ là số test;
- $𝑇$ nhóm dòng tiếp theo, mỗi nhóm gồm $2$ dòng ứng với một test:
    - Dòng thứ nhất chứa hai số nguyên dương $𝑛, 𝑘\ (1 ≤ 𝑘 ≤ 𝑛 ≤ 10^5)$;
    - Dòng thứ hai chứa $𝑛$ số nguyên $𝑎_1, 𝑎_2, … , 𝑎_𝑛\ (∀𝑖: |𝑎_𝑖| ≤ 10^9)$;

Các số trên một dòng được ghi cách nhau bởi dấu cách, số lượng các số trong dữ liệu vào không quá $2\times 10^5$;

## Dữ liệu ra:
- Với mỗi test ghi ra một số nguyên duy nhất trên một dòng là số dư của tích $𝑘$ phần tử được chọn khi chia cho $123456789$.

## Ví dụ:
### Dữ liệu vào:
```
3
5 3
1 2 3 4 5
6 4
-1 -1 -1 -1 0 9
5 3
-1 -1 -1 2 3
```

### Dữ liệu ra:
```
60
1
3
```
