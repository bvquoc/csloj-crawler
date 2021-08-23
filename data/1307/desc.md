**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 07/11/2020</center>**

Tỉnh miền núi zZz có $𝑁$ làng, đánh số $1,2, … , 𝑁$. Có $𝑀$ cặp làng có thể tiến hành ủi đất làm đường. Tỉnh zZz muốn làm đường sao cho làng $1$ và làng $𝑁$ trở nên liên thông. Hệ thống đường sẽ được hoàn thành dựa vào viện trợ ODA, vốn nhà nước và đóng góp của người dân như sau: Giả sử có $𝐶$ con đường được chọn để xây dựng:
- Viện trợ ODA dùng để thực hiện không quá $𝐾$ đoạn đường;
- Người dân đóng góp xây dựng đoạn đường dài nhất trong $𝐶 − 𝐾$ đoạn đường còn lại;
- Vốn nhà nước dùng để thực hiện các đoạn đường còn lại ($𝐶 - 𝐾 - 1$ đoạn đường cuối cùng) 

Hãy xác định số tiền ít nhất người dân phải đóng góp để hoàn thành hệ thống đường đảm bảo liên thông giữa làng $1$ và làng $N$.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $𝑁, 𝑀, 𝐾\ (1 ≤ 𝑁 ≤ 1000; 1 ≤ 𝑀 ≤ 10000; 0 ≤ 𝐾 < 𝑁)$;
- $M$ dòng tiếp theo, dòng thứ $𝑖$ chứa ba số nguyên $𝐴_𝑖, 𝐵_𝑖, 𝐿_𝑖\ (1 ≤ 𝐴_𝑖, 𝐵_𝑖 ≤ 𝑁; 1 ≤ 𝐿_𝑖 ≤ 10^6)$ chỉ hai làng $𝐴_𝑖, 𝐵_𝑖$ có thể xây dựng đường nối trực tiếp với chi phí $𝐿_𝑖$.

## Dữ liệu ra:
- Một số nguyên kết quả, số này bằng $−1$ nếu không có cách xây dựng đường.

## Ví dụ:
### Dữ liệu vào:
```
5 7 1
1 2 5
3 1 4
2 4 8
3 2 3
5 2 9
3 4 7
4 5 6
```

### Dữ liệu ra:
```
4
```