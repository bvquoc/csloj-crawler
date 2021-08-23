**<center>Nguồn: Beginner Free Contest 4</center>**

Cho một xâu $S$ chỉ gồm các kí tự latin in thường. Người ta tiến hành nén xâu $S$ như sau:
- Chọn ra một xâu $T$ có độ dài ngắn nhất có thể và chọn một số nguyên $K$, sao cho khi viết xâu $T$ lặp lại $K$ lần, ta thu được xâu $S$.
- Ghép nối $K$ và $T$, ta thu được xâu nén của $S$.

**Ví dụ:**
- Với $S =$ `abcabc` thì $T =$ `abc`, $K = 2$ nên xâu nén của $S$ là `2abc`
- Với $S =$ `aaaa` thì $T =$ `a`, $K = 4$ nên xâu nén của $S$ là `4a`
- Với $S =$ `freecontest` thì $T =$ `freecontest`, $K = 1$ nên xâu nén của $S$ là `1freecontest`

Hãy cho biết xâu nén của $S$.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa xâu $S$ độ dài không vượt quá $1000$.

## Dữ liệu ra:
- In ra xâu nén của xâu $S$.

## Ví dụ:
### Dữ liệu vào:
```
abcabc
```

## Dữ liệu ra:
```
2abc
```

### Dữ liệu vào:
```
aaaa
```

## Dữ liệu ra:
```
4a
```

### Dữ liệu vào:
```
freecontest
```

## Dữ liệu ra:
```
1freecontest
```