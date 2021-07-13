/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package transposicionfilas;

import java.util.LinkedList;

/**
 *
 * @author Erick Vidal
 */
public class TransposicionFilas {

    /**
     * @param args the command line arguments
     */
    static String alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static void filas(String clave, String cadena) {
        LinkedList<Character> L1 = new LinkedList<>();
        LinkedList<LinkedList<Character>> L2 = new LinkedList<>();
        int n = cadena.length() / clave.length();
        int posicion = 0;
        boolean reinicion = true;
        for (int i = 0; i < clave.length(); i++) {
            for (int j = 0; j <= n + 1; j++) {
                if (reinicion) {
                    L1.add(clave.charAt(i));
                    reinicion = false;
                }
                if (posicion < cadena.length()) {
                    L1.add(cadena.charAt(posicion));
                }
                posicion += clave.length();
            }
            posicion = i + 1;
            L2.add(L1);
            L1 = new LinkedList<>();
            reinicion = true;
        }
        String m = "";
        for (int i = 0; i < L2.size(); i++) {
            m = m + L2.get(i) + "\n";
        }
        System.out.println("-----Matriz por Filas-----"+"\n"+"\n"+m);
        String CriptoClave = obtenerCritoClave(clave);
        String cripto=obtenerCripto(CriptoClave,L2);
        
        System.out.println("Clave criptograma: "+ CriptoClave);
        System.out.println("Frace criptograma: "+cripto);
        
    }

    private static String obtenerCritoClave(String clave) {
        String r = "";
        for (int i = 0; i < alfabeto.length(); i++) {
            for (int j = 0; j < clave.length(); j++) {
                if (alfabeto.charAt(i) == clave.charAt(j)) {
                    r=r+alfabeto.charAt(i);
                }
            }
        }
        return r;
    }
    private static String obtenerCripto(String CriptoClave, LinkedList<LinkedList<Character>> L2) {
        String r="";
        for (int i = 0; i < CriptoClave.length(); i++) {
            for (int j = 0; j <L2.size() ; j++) {
                if (CriptoClave.charAt(i)==L2.get(j).get(0)) {
                    r=r+abjuntar(L2.get(j))+" ";
                }
            }
        }
        return r;
    }
    private static String abjuntar(LinkedList<Character> L1) {
        String r="";
        for (int i = 1; i < L1.size(); i++) {
            r=r+L1.get(i);
        }
        return r;
    }
    public static void main(String[] args) {
        // TODO code application logic here
        filas("SALUDO", "BENJAMINFRANKLININVENTOELPARARAYOSENMILSETECIENTOSCINCUENTAYDOS");
        
    }
}
