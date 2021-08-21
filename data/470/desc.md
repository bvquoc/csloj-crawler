Các bạn có biết trò chơi gây nghiện **Flappy Bird** của Nguyễn Hà Đông không? Trong bài ngày hôm nay của chúng ta có một con chim ngu ngốc bay vào một cái hang với các chướng ngai vật là các măng đá (mọc lên từ đáy hang) và nhũ đã (nhô xuống từ trần hàng).
<center><img src="/images/problems/470/STUPIDBIRD1.png" width=400px></center>

Con chim này không biết bay lên xuống để tránh các chướng ngại vật như con chim của Nguyễn Hà Đông mà thay vào đó, nó sẽ chọn một mức chiều cao bắt đầu rồi bay từ đầu đến cuối hang, phá hết tất cả các chướng ngại vật trên đường bay của nó.
<center><img src="/images/problems/470/STUPIDBIRD2.png" width=400px></center>

Nếu chọn bay ở những độ cao khác nhau thì số chướng ngại vật nó phải phá là khác nhau. Theo ví dụ trên, nếu chọn mức $4$, con chim sẽ phá tất cả là $8$ chướng ngại vật. Đây không phải là lựa chọn tốt nhất vì con chim sẽ ít mệt hơn nếu chọn mức $1$ hoặc mức $5$, lúc này nó chỉ cần phá $7$ chướng ngại vật.

Bạn được cho biết số $N$ là số chướng ngại vật, $H$ là chiều cao của hang, thông tin về các chướng ngại vật. Hãy xác định số chướng ngại vật tối thiểu mà con chim cần phá để đi qua hang.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N$ và $H$ được ghi cách nhau một dấu cách.
- Dòng thứ hai chứa $N$ số nguyên $l_1, l_2, …, l_N$ khác $0$, hai số liên tiếp được ghi cách nhau một dấu cách. Nếu $l_i > 0$ thì đó là măng đá mọc lên từ đáy hang với độ dài $l_i$, nếu $l_i < 0$ thì đó là nhũ đá nhô xuống từ trần hang với độ dài $|l_i|$.

## Dữ liệu ra:
- Ghi trên một dòng số nguyên là số chướng ngại vật tối thiểu cần xuyên phá.

## Ví dụ:
#### Dữ liệu vào:
```
6 7
1 3 -5 -3 5 -1
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
14 5
1 -3 4 -2 2 -4 3 -4 3 -3 3 -2 3 -3
```

#### Dữ liệu ra:
```
7
```

## Giới hạn:
- $1 ≤ N ≤ 10^5; 1 ≤ H ≤ 5\times 10^5; 0< |l_i| ≤ H$.