Trên đường từ nhà bé Khăn đỏ (trong truyện cô bé quàng khăn đ) đến nhà bà ngoại phải đi qua một khu rừng. Khu rừng hình chữ nhật được chia thành $M$ hàng $N$ cột, hàng được đánh số từ $1$ đến $M$, cột được đánh số từ $1$ đến $N$, ô ở hàng $i$, cột $j$ được ký hiệu là ô $(i, j)$. Nhà bé khăn đỏ ở ô $(1, 1)$ còn nhà bà ngoại ở ô $(M, N)$, chẳng hạn với $M = 4, N = 5$ ta có hình vẽ như sau (Nhà bé khăn đỏ ở ô màu đỏ, nhà bà ngoại ở ô màu xanh):
<center><img src="/images/problems/395/BTFLOWER_1.PNG"></center>
 
Trên khu rừng, có một số ô có bông hoa, một số ô không có gì và một số ô có sói hung dữ mà ta không thể đi vào đó.

Ta quy ước những ô có số $-1$ là có sói, những ô có số $0$ là không có gì và những ô có số nguyên dương là có bông hoa với độ đẹp là số nguyên dương đó.

Hôm nay, bà ngoại bị ốm và mẹ sai bé khăn đỏ mang cơm cho bà. Khi đi mẹ có dặn bé khăn đỏ không được la cà, tức là từ một ô chỉ có thể đi sang ô kề cạnh phía bên phải hoặc kề cạnh phía dưới (tất nhiên là ô đó phải không có sói).

Trên đường đi, bé khăn đỏ muốn hái tặng bà một bó hoa đẹp nhất. Em hãy tính xem bó hoa đẹp nhất mà bé khăn đỏ có thể hái được là bao nhiêu và hãy giúp bé khăn đỏ hiếu thảo tìm một đường đi để hái được bó hoa như vậy nhé (Ở đây ta quy ước “độ đẹp” của bó hoa là tổng “độ đẹp” của tất cả các bông hoa của bó hoa đó).

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $M, N$ cách nhau bởi một khoảng trắng;
- $M$ dòng tiếp theo, dòng thứ $i$ chứa $N$ số nguyên $a_{ij}$ là thông tin về các ô trên hàng thứ $i$.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên là “độ đẹp” của bó hoa đẹp nhất hái được (nếu không thể đến được nhà bà thì ghi ra số $-1$) ;
- Nếu tồn tại hành trình, các dòng tiếp theo ghi một hành trình từ nhà bé khăn đỏ sang nhà bà, mỗi dòng ghi hai số nguyên $u, v$ là chỉ số dòng, chỉ số cột của ô trên hành trình. Hành trình được liệt kê theo thứ tự các ô đi qua (Bắt đầu từ ô $(1, 1)$ đến ô $(M, N)$) 

## Ví dụ:
#### Dữ liệu vào:
```
4 5
0 3 0 0 0
1 -1 2 5 0
1 2 -1 -1 0
-1 1 1 1 0
```

#### Dữ liệu ra:
```
10
1 1
1 2
1 3
2 3
2 4
2 5
3 5
4 5
```

#### Giải thích:
- Những ô tô màu vàng là hành trình đi (trừ ô đầu và ô cuối)
<center><img src="/images/problems/395/BTFLOWER_2.PNG"></center>

## Giới hạn:
- $2 ≤ N, M ≤ 20, -1 ≤ a_{ij} ≤ 1000$