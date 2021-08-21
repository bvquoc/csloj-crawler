**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Cho dãy số nguyên ~𝐴 = (𝑎_1, 𝑎_2, … , 𝑎_𝑛)~ và một số nguyên dương ~𝑘~, biết rằng các phần tử của dãy ~𝐴~ là số nguyên dương trong phạm vi từ ~1~ tới ~𝑘~ và mỗi giá trị từ ~1~ tới ~𝑘~ đều xuất hiện trong dãy ~𝐴~ ít nhất một lần.

Hãy tìm cách xóa đi đúng ~𝑛 − 𝑘~ phần tử của dãy ~𝐴~ và giữ nguyên thứ tự các phần tử còn lại để thu được một hoán vị có thứ tự từ điển nhỏ nhất của dãy số ~(1,2, … , 𝑘)~.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~𝑇 ≤ 10~ là số test;
- ~𝑇~ nhóm dòng tiếp theo, mỗi nhóm dòng chứa dữ liệu một test theo khuôn dạng:
    - Dòng đầu chứa hai số nguyên dương ~𝑛, 𝑘\ (1 ≤ 𝑘 ≤ 𝑛 ≤ 10^5)~;
    - Dòng thứ hai chứa các số nguyên ~𝑎_1, 𝑎_2, … , 𝑎_𝑛~.

## Dữ liệu ra:
- Ứng với mỗi test, ghi ra hoán vị còn lại sau khi xóa ~𝑛 − 𝑘~ phần tử dãy ~𝐴~ theo phương án tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
2
4 3
3 2 1 2
8 4
4 2 3 3 1 3 2 4
```

#### Dữ liệu ra:
```
3 1 2
1 3 2 4
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)