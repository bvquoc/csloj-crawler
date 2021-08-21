**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 08/11/2020</center>**

Bờm di cư ra phố. Cậu cần vận chuyển $𝑁$ món đồ bằng $𝑀$ chiếc xe tải mượn được, tải trọng các xe lần lượt là $𝑐_1, 𝑐_2, … , 𝑐_𝑀$, trọng lượng các món đồ lần lượt là $𝑤_1, 𝑤_2, … , 𝑤_𝑁$. Cách thức Bờm xếp đồ lên xe là như sau: các món đồ sẽ lần lượt được xếp theo thứ tự $1,2, … , 𝑁$, khi xe đang được xếp đầy hoặc không còn đủ tải thì mới chuyển sang xe khác, thứ tự các xe vào nhận đồ là tùy ý Bờm.

Bờm muốn tìm một thứ tự các xe vào nhận đồ sao cho với cách thức xếp các món đồ kể trên tổng tải trọng các xe không sử dụng là lớn nhất có thể. Hãy xác định giúp Bờm tổng tải trọng lớn nhất đó.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $𝑀, 𝑁\ (1 ≤ 𝑀 ≤ 16; 1 ≤ 𝑁 ≤ 10^5)$;
- $M$ dòng tiếp theo chứa các số nguyên $𝑐_1, 𝑐_2, … , 𝑐_𝑀\ (1 ≤ 𝑐_𝑖 ≤ 10^9);
- $N$ dòng tiếp theo chứa $𝑁$ số nguyên $𝑤_1, 𝑤_2, … , 𝑤_𝑁\ (1 ≤ 𝑤_𝑖 ≤ 10^4)$.

## Dữ liệu ra:
- Một dòng duy nhất chứa số nguyên kết quả (số này bằng $−1$ nếu Bờm không thể vận chuyển hết các món đồ).

## Ví dụ:
#### Dữ liệu vào:
```
3 6
12 15 10
6 3 3 2 3 7
```

#### Dữ liệu ra:
```
12
```